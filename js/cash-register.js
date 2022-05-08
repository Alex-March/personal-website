function checkCashRegister(price, cash, cid) {
  let cashRegister = {};
  let changeNeeded = cash - price;
  console.log(changeNeeded)
  let denominations = [
      {name: "PENNY", value: 0.01},
      {name: "NICKEL", value: 0.05},
      {name: "DIME", value: 0.1},
      {name: "QUARTER", value: 0.25},
      {name: "ONE", value: 1},
      {name: "FIVE", value: 5},
      {name: "TEN", value: 10},
      {name: "TWENTY", value: 20},
      {name: "ONE HUNDRED", value: 100}
  ];

  cashRegister.change = [];
  
// remove the available change to be given for denominations that are greater than the change needed to be given
  for (let i = 0; i < cid.length; i++) {
    if (denominations[i].value > (cash - price)) {
      cid[i][1] = 0;
    }
  }
  const newCid = cid.filter(n => n);

// sum up all eligible change that can be given
  let inputOne = newCid
    // .filter()
    .reduce((a, b) => a + b[1], 0);
  let sumOfAllChange = Math.round(newCid.reduce((a, b) => a + b[1], 0) * 100)/100;
  console.log(sumOfAllChange, "sumofallchange");
  console.log(changeNeeded, "changeNeeded");

  
  // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
   if (changeNeeded === sumOfAllChange) {
     cashRegister.status = "CLOSED";
     cashRegister.change = newCid;
   }

// sum of all change that is smaller than the denomination
// if price - cash < sum() 

  //  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
    else if (changeNeeded > sumOfAllChange) {
     cashRegister.status = "INSUFFICIENT_FUNDS";
     cashRegister.change = [];
    }

  // Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    else {
     cashRegister.status = "OPEN";
      let subCid = newCid.map(a => a[1]);
      for (let i = subCid.length -1 ; i >= 0; i--) {
        console.log(subCid[i], i, "subCid[i]")
        changeNeeded = Math.round(changeNeeded * 100)/100;
          console.log(denominations[i]['value'], "denominations[i]['value']")

        if (changeNeeded > subCid[i] && denominations[i]['value'] < changeNeeded) {
          changeNeeded = changeNeeded - subCid[i] //( % denominations[i]['value'])
          // cashRegister.change.push(subCid[i])
          cashRegister.change.push(newCid[i]);
          console.log(changeNeeded, "changeNeeded");
        } else if (changeNeeded > denominations[i]['value'] && subCid[i] > 0){
            console.log(subCid[i], "else if subCid[i]")
            let amountNotMax = Math.floor(changeNeeded / denominations[i]['value']) * denominations[i]['value'];
            cashRegister.change.push([newCid[i][0], amountNotMax]);
            changeNeeded = changeNeeded - amountNotMax;
        }
      }
    return cashRegister;
    }
  return cashRegister;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
