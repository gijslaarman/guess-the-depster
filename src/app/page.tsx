'use client'

import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import Autocomplete from "./components/autocomplete";
import { ZoomImage } from './components/image'
import currentDepster from '../data/current-depster.json'
import Confetti from "react-confetti";

const CURRENT_ANSWER = currentDepster.name
const MAX_STEPS = 5

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [win, setWin] = useState(false)

  const setAnswer = useCallback((answer: string) => {
    if (!answer) return // If answer is empty, we don't do anything
    if (answer === CURRENT_ANSWER) {
      setWin(true)
    } else {
      // Everytime the user selects an answer, we increase the step by 1
      if (currentStep === MAX_STEPS) return // If we are at the last step, we don't do anything
      setCurrentStep((s) => s + 1)
    }
  }, [])

  useEffect(() => {

    // User got the answer wrong so we go to the next step
    if (currentStep === MAX_STEPS + 1) {

    }
  }, [currentStep])

  return (
    <main className={styles.main}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/images/logo.png" role="presentation" alt="" style={{
        width: '125px',
        height: '125px'
      }} />

      <h1 style={{ textAlign: 'center', width: '100%' }}>{win ? `You guessed the right person!` : "Who's this Depster?"}</h1>

      {/* Image component with current image step */}
      <ZoomImage step={win ? 5 : currentStep} />

      {win && <Confetti />}

      {/* This should show the autocomplete input with list */}
      {currentStep <= 5 && !win ?
        <>
          <div style={{ textAlign: 'center' }}>
            <h3>{'Here\'s a hint:'}</h3>
            <p>{currentDepster.hints[currentStep - 1]}</p>
          </div>
          <Autocomplete setAnswer={setAnswer} />
        </>
        :
        <h2>{`It was ${currentDepster.name}`}</h2>
      }
    </main>
  );
}
