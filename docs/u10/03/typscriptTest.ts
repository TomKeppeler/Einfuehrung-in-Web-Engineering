class Person {
    [x: string]: any;
    private name : string;
    private age : number;
    private frieds : Person[];
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public addFriend(friend: Person) : void {
        this.frieds.push(friend);
    }
    public friendsToString() : string{
        let ret : string = "";
        for (let friend of this.frieds){
            ret += friend.toString() + "\n";
        }
        return ret;
    }
    public getAge() : number{
        return this.age;
    }
    public getName() : string{
        return this.name;
    }
    public toString() : string{
        return "Name: " + this.name + " Age: " + this.age;
    }
}

let friendsGroup : Person[] = [];

for (let i : number = 0; i < 50; i++){
    friendsGroup.push(new Person("name" + i, i));
}

let personWithManyFriends : Person = new Person("Max Musterman", 24);
personWithManyFriends.forEach(element => {
    personWithManyFriends.addFriend(element);
});