import {React, useState} from 'react';
import { useAlert } from 'react-alert';
import '../styles/controlPanel.scss';
import { TotalMoney } from './controlPanel/TotalMoney';
import { MoneyButton } from './controlPanel/MoneyButton';
import { ShortChangeBtn } from './controlPanel/ShortChangeBtn';

export const ControlPanel = (props) => {
    const alert = useAlert();
    const [visibility, setVisibility] = useState('control-panel__short-change hidden');
    let [copy, setCopy] = useState();
    const shortChangeHandle = () => {
      setVisibility('control-panel__short-change')
      setCopy(Object.assign({}, analizedMoney))
      let rez = 0;
      for (let key in analizedMoney){
        rez += analizedMoney[key] * key
      }
      console.log(rez)
      props.setUserMoney(0)
    }
    const analyzeMoney = (ammountRequired) => {
      if(props.userMoney == 0)
        return {}
      function collect(amount, nominals) {
        if (amount === 0) return {}; // Успех, но сдача = 0
        if (!nominals.length) {
          alert.show('В автомате закончились деньги для сдачи, получите сдачу оставшимися деньгами.')
          return {};
        }; // Неудача, сюда запихнуть продуктами
        let currentNominal = nominals[0];
        let avaiableNotes = props.moneyNominals[currentNominal];
        let notesNeeded = Math.floor(amount / currentNominal);
        let numberOfNotes = Math.min(avaiableNotes, notesNeeded);
    
        for (let i = numberOfNotes; i >= 0; i--) {
          
          let result = collect(amount - i * currentNominal, nominals.slice(1));
    
          if (result) {
            if(i){
              return({ [currentNominal]: i, ...result });
            }
            else{
              return(result)
            }
          }
        }
        
      }
      let products = Object.values(props.goods).map(item => item.price).sort((a,b) => b - a);
      let nominals = Object.keys(props.moneyNominals)
        .map(Number)
        .sort((a, b) => b - a);
      return collect(ammountRequired, nominals);
    };
    let analizedMoney = analyzeMoney(props.userMoney)
    let rez = 0;
      for (let key in analizedMoney){
        rez += analizedMoney[key] * key
    }
    const moneyButtons = [50, 100, 500, 1000]
    return(
        <>
            <div className='control-panel'>
                <TotalMoney total={props.userMoney}/>
                {moneyButtons.map(item => 
                    <MoneyButton key={item} 
                    nominal={item} money={props.userMoney} 
                    setMoney={props.setUserMoney} 
                    moneyNominals={props.moneyNominals}
                    setVisibility={setVisibility}
                    />    
                )}
                {/* <ShortChange shortChange={shortChange}/> */}
                <ShortChangeBtn shortChangeHandle={() => shortChangeHandle()}/>
                <div className={visibility}>
                  {Object.entries(Object.assign({}, copy)).map(item =>
                    <div key={item} className='short-change__item'>
                      <div>{item[0]}</div>
                      <div>{item[1]}</div>
                    </div>
                  )}
                </div>
                {/* Здесь добавить деструктуризацию массива */}
            </div>
        </>
    )
}



/*
let iWantToGet = (ammountRequired) => {
  let limits = {500: 10, 100: 15, 50: 20, 10: 10, 5: 15, 1:10};
  function collect(amount, nominals) {
    if (amount === 0) return {}; // success
    if (!nominals.length) return; // failure
    let currentNominal = nominals[0];
    let avaiableNotes = limits[currentNominal];
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

    for (let i = numberOfNotes; i >= 0; i--) {
      
      let result = collect(amount - i * currentNominal, nominals.slice(1));

      if (result) {
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
    
  }

  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  console.log(nominals);

  return collect(ammountRequired, nominals);
};

let test = iWantToGet(500);
console.log(test)
*/