import React, {Component} from 'react';
import './App.css';
import CreditCard from './credit-card/credit-card';

class App extends Component {
  state={};

  componentDidMount() {
    // get data and set state
    this.setState({
      january: [120, 130, 140],
      february: [100,90, 40],
      march: [20,180,90]
    });
  }

calculateCredits = () => {
    const months = Object.keys(this.state);
    const newDatSet = [];
    let total = 0;
    months.forEach(month => {
        const creditsPerMonth = this.state[month].reduce((accumulator, currentValue) => {
            const amountOver100 = currentValue - 100 < 0 ? 0 :  currentValue - 100;
            const creditsAbove100 =  amountOver100 * 2;
            const amountOver50 = currentValue - (amountOver100 + 50);
            const credits50 = amountOver50 > 0 ? amountOver50 : 0;
            // console.log(amountOver100, amountOver50)
            // console.log(creditsAbove100, credits50)
            return accumulator + creditsAbove100 + credits50;
        }, 0);
        newDatSet.push({month, credits: creditsPerMonth});
        total += creditsPerMonth;
        console.log(`credits accquired for the month of ${month} are ${creditsPerMonth}`);
    });
    newDatSet.push({total});
    return newDatSet;
}

  render() {
    return (
      <div className="container">
          {
            this.calculateCredits().map(({month, credits, total}) => {
              return month && credits ? <CreditCard credits={credits} month={month} /> : <h3 className="m-3">Total Credits: {total}</h3>
            })
          }
      </div>
    );
  }
}

export default App;
