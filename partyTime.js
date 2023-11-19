function partyTime(input) {
    let vipGuests = [];
    let normalGuests = [];
   
    let command = input.shift();
   
    while (command !== "PARTY") {
      let firstChar = command[0];
   
      if (isNaN(firstChar[0])) {
        normalGuests.push(command);
      } else {
        vipGuests.push(command);
      }
   
      command = input.shift();
    }
   
    let allGuests = vipGuests.concat(normalGuests);
   
    for (const guest of input) {
      if (allGuests.includes(guest)) {
        allGuests.splice(allGuests.indexOf(guest), 1); //we find the index of the guest and delete 1 element there(him or her)
      }
    }
   
    console.log(allGuests.length);
    allGuests.forEach((guest) => console.log(guest));
  }