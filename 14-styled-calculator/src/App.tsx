import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { Input } from './components/Input';
import { defaultTheme } from './themes/defaultTheme';

const MAX_PERSONS = 9;

export default function Calculator() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);

  const [peopleError, setPeopleError] = useState(false);

  const alright =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright && ((bill * tip) / people).toFixed(2);
  const totalPerPerson = alright && ((bill * (1 + tip)) / people).toFixed(2);
  const showTip = !(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal = !(
    totalPerPerson === 'NaN' || totalPerPerson === 'Infinity'
  );

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="App">
        Bill:
        <Input
          iconType="bill"
          placeholder="0"
          type="number"
          min={0}
          value={bill}
          onChange={(e) => {
            if (e.target.value.length < 9) {
              setBill(e.target.valueAsNumber);
            }
          }}
        />
        <div>
          <button
            onClick={() => {
              setTip(0.05);
            }}
          >
            5%
          </button>
          <button
            onClick={() => {
              setTip(0.1);
            }}
          >
            10%
          </button>
          <button
            onClick={() => {
              setTip(0.15);
            }}
          >
            15%
          </button>
          <button
            onClick={() => {
              setTip(0.25);
            }}
          >
            25%
          </button>
          <button
            onClick={() => {
              setTip(0.5);
            }}
          >
            50%
          </button>
          <Input
            placeholder="Custom"
            type="number"
            min={0}
            value={tip && tip * 100}
            onChange={(e) => {
              if (e.target.value.length < 4) {
                setTip(e.target.valueAsNumber / 100);
              }
            }}
          />
        </div>
        People:
        <Input
          iconType="person"
          placeholder="0"
          type="number"
          value={people}
          min={0}
          onKeyDown={(e) => {
            if (e.key === '.') {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            if (e.target.value.length < MAX_PERSONS) {
              setPeople(e.target.valueAsNumber);
            }
          }}
        />
        <div style={{ color: 'red' }}>
          {peopleError ? `Can't Be Zero` : null}
        </div>
        <div>
          tip amount / person:
          {showTip ? tipAmount : '0.00'}
        </div>
        <div>
          total / person:
          {showTotal ? totalPerPerson : '0.00'}
        </div>
      </div>
    </ThemeProvider>
  );
}