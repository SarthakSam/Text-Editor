class Operation{
    constructor(operation, value, index){
        this.operation = operation;
        this.value = value;
        // this.index = index;
    }
}

class Stack{
    
    constructor(buffer = 4){
        this.arr = [],
        this.buffer = buffer
    }

    isEmpty(){
        return this.arr.length == 0;
    }

    top(){
        return this.arr[this.arr.length - 1];
    }

    push( operation, value ){
        if(this.isEmpty())
            this.arr.push( new Operation( operation, value ) );
        else{
            let prevOperation = this.top();
            if( prevOperation.operation == operation && prevOperation.value.length < 4){
                prevOperation.value = prevOperation.value + value;
            }
            else{
                this.arr.push( new Operation( operation, value ) );
            }
        }    
    }
    pop(){
        if(this.isEmpty())
            return new Operation( -1, "");
        return this.arr.pop();    
    }

    display(){
        this.arr.forEach(elem => {
            console.log(elem);
        })
    }
}

export { Stack }