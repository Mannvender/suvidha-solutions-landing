import { Box, Flex, Text } from 'rebass'
import { useState, useEffect } from 'react'
import styled, { useTheme, css } from 'styled-components'
import { toast } from 'react-toastify'
import Button from '../Button'
import { buttonCss } from 'components/Button'

import { WalletMultiButton as WalletMultiButtonBase } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import * as anchor from '@project-serum/anchor'
import {
  getCandyMachineState,
  mintOneToken,
  awaitTransactionSignatureConfirmation
} from 'utils/solana'

const treasury = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_TREASURY_ADDRESS
)
const config = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG
)
const candyMachineId = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
)
// const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK;
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST
const connection = new anchor.web3.Connection(rpcHost)
// const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE, 10);
const txTimeout = 30000 // milliseconds (confirm this works for your project)

const WalletMultiButton = styled(WalletMultiButtonBase)`
  ${buttonCss}
`

const MintSection = ({}) => {
  const wallet = useWallet()
  const { colors } = useTheme()

  const [balance, setBalance] = useState()
  const isLowBalance = Boolean(balance < 0.5)
  const [isActive, setIsActive] = useState(true) // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT
  const [candyMachine, setCandyMachine] = useState()

  const handleClick = async () => {
    try {
      setIsMinting(true)
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury
        )

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          'singleGossip',
          false
        )

        if (!status?.err) {
          toast.success('Congratulations! Mint succeeded!')
        } else {
          toast.error('Mint failed! Please try again!')
        }
      }
    } catch (error) {
      console.log(error)
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          setIsSoldOut(true)
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }

      toast.error(message)
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
      setIsMinting(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, connection])

  useEffect(() => {
    ;(async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction
      }

      const {
        candyMachine,
        goLiveDate,
        itemsRemaining
      } = await getCandyMachineState(anchorWallet, candyMachineId, connection)
      console.log(itemsRemaining, '---remaining')

      setIsSoldOut(itemsRemaining === 0)
      setCandyMachine(candyMachine)
    })()
  }, [wallet, candyMachineId, connection])

  return (
    <>
      <Box marginRight='1em' marginBottom='1em'>
        <WalletMultiButton primary />
      </Box>
      <>
        {wallet.connected && (
          <Button
            disabled={isSoldOut || isMinting || !isActive}
            style={{ width: '100%', marginBottom: '1rem' }}
            color={colors.light}
            onClick={handleClick}
            primary
          >
            {isSoldOut
              ? 'Sold Out'
              : isActive
              ? isMinting
                ? 'Minting...'
                : isLowBalance
                ? 'Low Balance'
                : 'Mint'
              : 'Not active'}
          </Button>
        )}
      </>
    </>
  )
}

export default MintSection
