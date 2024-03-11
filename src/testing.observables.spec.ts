import { fakeAsync, tick } from "@angular/core/testing";
import { of, throwError } from "rxjs"
import { delay, map } from "rxjs/operators";
import {cold, hot} from "jest-marbles";

describe("Testing Observables patterns",()=>{
    it("Subscribe pattern of a simple obervable",()=>{
        // ARRANGE
        const obervable = of(1,2,3);
        let actualStreamedData = [] as Array<any>;
        
        // ACT
        obervable.subscribe((data)=>{
            actualStreamedData.push(data);
        })

        // NOTE - Below assertion is possible because there is no delay added while emitting the stream of data. So the code here is synchronous
        // ASSERT
        expect(actualStreamedData).toHaveLength(3);
        expect(actualStreamedData).toEqual([1,2,3])
    })

    it("Subscribe pattern of a simple error obervable",()=>{
        // ARRANGE
        const simpleError = new Error('Simple Error');
        const obervable = throwError(simpleError);
        let actualStreamedData = [] as Array<any>;
        let actualErrorData;
        
        // ACT
        obervable.subscribe({
            next:(data)=>{
                actualStreamedData.push(data);
            },
            error:(data:Error)=>{
                actualErrorData = data;
            }
        })

        // NOTE - Below assertion is possible because there is no delay added while emitting the stream of data. So the code here is synchronous
        // ASSERT
        expect(actualStreamedData).toHaveLength(0);
        expect(actualErrorData).toEqual(simpleError);
    })
    describe("Jest done approach",()=>{
        it("Subscribe pattern of a simple delayed obervable",(done)=>{
            // ARRANGE
            const obervable = of(1,2,3).pipe(delay(100),map(data=> data*10));
            let actualStreamedData = [] as Array<any>;
            
            // ACT
            obervable.subscribe({
                next:(data)=>{
                    actualStreamedData.push(data);
                },
                complete:()=>{
                    // ASSERT
                    expect(actualStreamedData).toHaveLength(3)
                    expect(actualStreamedData).toEqual([10,20,30])
                    done();
                }            
            })
        })
    })
    
    describe("Angular's fakeAsync/tick approach",()=>{
        it("Subscribe pattern of a delayed obervable",fakeAsync(()=>{
            // ARRANGE
            const obervable = of(1,2,3).pipe(delay(100));
            let actualStreamedData = [] as Array<any>;
            
            // ACT
            obervable.subscribe({
                next:(data)=>{
                    actualStreamedData.push(data)
                },
            })

            // ASSERT
            tick(500);
            expect(actualStreamedData).toHaveLength(3);
            expect(actualStreamedData).toEqual([1,2,3]);
        }))
    
    
        it("Subscribe pattern of a delayed mapped obervable",fakeAsync(()=>{
            // ARRANGE
            const obervable = of(1,2,3).pipe(delay(100),map(data=> data*10));
            let actualStreamedData = [] as Array<any>;
            
            // ACT
            obervable.subscribe({
                next:(data)=>{
                    actualStreamedData.push(data)
                },
            })

            // ASSERT
            tick(500);
            expect(actualStreamedData).toHaveLength(3);
            expect(actualStreamedData).toEqual([10,20,30]);
        }))
    })
   
    describe('Marbel Patterns',()=>{
        it("Marbel pattern of a simple obervable",()=>{
            // ARRANGE
            const obervable = cold('abc',{a:1,b:2,c:3});
            const expectedObservable = cold("123");
            
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })

    
        it("Marbel pattern of a simple delayed obervable",()=>{
            // ARRANGE
            const obervable = cold('-a--b---c',{a:1,b:2,c:3});
            const expectedObservable = cold("-1--2---3");
    
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })

        it("Marbel pattern of a simple delayed mapped obervable",()=>{
            // ARRANGE
            const obervable = cold('-a--b---c',{a:1,b:2,c:3}).pipe(map(val=>val*10));
            const expectedObservable = cold("-a--b---c",{a:10,b:20,c:30});
    
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })
    
        it("Marbel pattern of a simple delayed and completed obervable",()=>{
            // ARRANGE
            const obervable = cold('-a-b-c|',{a:1,b:2,c:3});
            const expectedObservable = cold("-1-2-3|");
            
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })
    
        it("Marbel pattern of a simple delayed and completed hot obervable",()=>{
            // ARRANGE
            const obervable = hot('-a-^b-c|',{a:1,b:2,c:3});
            const expectedObservable = cold("-2-3|");
    
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })
    
        it("Marbel pattern of a simple error obervable",()=>{
            // ARRANGE
            const simpleError = new Error("Simple Error message")
            const obervable = cold('#',null,simpleError);
            const expectedObservable = cold("#",null,simpleError);
    
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })
    
        it("Marbel pattern of a simple delayed error obervable",()=>{
            // ARRANGE
            const simpleError = new Error("Simple Error message")
            const obervable = cold('--#',null,simpleError);
            const expectedObservable = cold("--#",null,simpleError);
    
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })
    
        it("Marbel pattern of a mixed output obervable",()=>{
            // ARRANGE
            const simpleError = new Error("Simple Error message")
            const obervable = cold('--a--#',{a:1},simpleError);
            const expectedObservable = cold("--a--#",{a:1},simpleError);
            
            // ASSERT
            expect(obervable).toBeObservable(expectedObservable);
        })

        it("Marbel pattern of testing a value to be set once the value is received from observable stream",()=>{
            // ARRANGE
            const observable = cold('-1-2-3');
            const expectedObservable = cold("-1-2-3");
            let count = 0;
            
            // ACT
            observable.subscribe(()=>count++);
    
            // ASSERT
            expect(observable).toBeObservable(expectedObservable);
            expect(observable).toSatisfyOnFlush(() => {
                expect(count).toBe(3)
            })
        })
    })
})