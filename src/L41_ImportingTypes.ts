import { me, User } from "./L41_OtherFIles";
import { addDays } from "date-fns";
import { times } from "lodash"

export function L41_ImportingTypes() {
    // Example 1
    // function printUser(user: User) {
    //     console.log(user.name);
    // }

    // printUser(me); //- End Example 1

    // Example 2
    addDays(new Date(), 3);

    times(5, () => console.log("Hello"))
}

// Note: If there is no error in installing the package, it will not show error
// in the console If there is an error, You need to install the package @types/package-name

