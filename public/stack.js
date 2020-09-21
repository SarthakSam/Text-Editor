class Operation{
    constructor(operation, value, index){
        this.operation = operation;
        this.value = value;
        this.index = index;
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

    push( operation, value, index ){
        if(this.isEmpty())
            this.arr.push( new Operation( operation, value, index ) );
        else{
            let prevOperation = this.top();
            console.log(prevOperation, value, index);
            if( prevOperation.operation == operation && prevOperation.value.length < this.buffer && Math.abs(prevOperation.index - index) ==  prevOperation.value.length){
                prevOperation.value = prevOperation.value + value;
            }
            else{
                this.arr.push( new Operation( operation, value, index ) );
            }
        }    
    }
    pop(){
        if(this.isEmpty())
            return new Operation( -1, "", -1);
        return this.arr.pop();    
    }

    display(){
        this.arr.forEach(elem => {
            console.log(elem);
        })
    }
}

export { Stack }