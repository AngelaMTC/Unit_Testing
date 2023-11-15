import { expect } from 'chai';
import Calculator from '../src/calculator';

describe('Test Calculator Class', ()=>{

    //Summatory
    it('Should return sum', ()=>{
        //arrange:
        const calc = new Calculator();

        //act:
        const result = calc.add(2,3);

        //Assert:
        expect(result).to.equal(5);
    });

    //Substraction:
    it('Should return substract', ()=>{
        //arrange:
        const calc = new Calculator();

        //act:
        const result = calc.substract(2,3);

        //Assert:
        expect(result).to.equal(-1);
    });

    //Multiplication:
    it('Should return multiply', ()=>{
        //arrange:
        const calc = new Calculator();

        //act:
        const result = calc.multiply(2,3);

        //Assert:
        expect(result).to.equal(6);
    });

    //Division:
    it('Should return divide', ()=>{
        //arrange:
        const calc = new Calculator();

        //act:
        const result = calc.divide(0,2);

        //Assert:
        expect(result).to.equal(1);
    });
    it('Should throw an error while dividing by zero', ()=>{
        //arrange:
        const calc = new Calculator();
        expect(()=> calc.divide(10,0)).to.throw('Cannot divide by zero.');
    })
});