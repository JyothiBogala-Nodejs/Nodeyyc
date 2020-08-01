
const isEven = require('./numbers');
const marks = [2, 3, 101, 201, 202, 100];

for (mark of marks){
    

    if (isEven(mark)) {
        type = 'even';
    }
    else {
        type = 'odd'; 
    }
    console.log(mark + "is" + type);
}

