var students = ['student1', 'student2'];

interface AddressType {
    streetName: string;
    city: string;
    country: string; 
    zipCode: string;
  };

type UserType = {
    firtsName: string;
    lastName: string;
    cinicNo: number;
    isStudent: boolean;
    subject: string[];
    address: AddressType
  };

var user: UserType = {
    firtsName: "masfa",
    lastName: "ghori",
    cinicNo: 1234556,
    isStudent: true,
    subject: ["english", "programing","education"],
    address: {
        streetName: "abc road",
        city: "karachi",
        country: "pakistan",
        zipCode: "1245"
    },
    
};

var address: AddressType = {
    streetName: "abc road",
        city: "karachi",
        country: "pakistan",
        zipCode: "1245"
};

    
console.log(user);

var fruitName: string = "mango";
var fruits: string[] = ['apple',' grapes', 'mango'];

var users: UserType[] = []


// number, string , boolean => types
// practice

let userobj:  {fName: string , lastName: string} = {
    fName: "aliza  ghori",
    lastName: "rajpuit"
}

console.log(userobj);
    


