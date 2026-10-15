const friend = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve", "Frank"];

const allFriends = [...friend, ...schoolFriends];

console.log(allFriends);


const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");