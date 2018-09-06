import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-wheel-table',
    templateUrl: './wheel-table.component.html',
    styleUrls: ['./wheel-table.component.scss']
})
export class WheelTableComponent implements OnInit {
    public numberSquares = [
        { name: 1, value: 35, directBet: 0, contents: [1], color: 'red', row: 1 },
        { name: 2, value: 35, directBet: 0, contents: [2], color: 'black', row: 2 },
        { name: 3, value: 35, directBet: 0, contents: [3], color: 'red', row: 3 },
        { name: 4, value: 35, directBet: 0, contents: [4], color: 'black', row: 1 },
        { name: 5, value: 35, directBet: 0, contents: [5], color: 'red', row: 2 },
        { name: 6, value: 35, directBet: 0, contents: [6], color: 'black', row: 3 },
        { name: 7, value: 35, directBet: 0, contents: [7], color: 'red', row: 1 },
        { name: 8, value: 35, directBet: 0, contents: [8], color: 'black', row: 2 },
        { name: 9, value: 35, directBet: 0, contents: [9], color: 'red', row: 3 },
        { name: 10, value: 35, directBet: 0, contents: [10], color: 'black', row: 1 },
        { name: 11, value: 35, directBet: 0, contents: [11], color: 'black', row: 2 },
        { name: 12, value: 35, directBet: 0, contents: [12], color: 'red', row: 3 },
        { name: 13, value: 35, directBet: 0, contents: [13], color: 'black', row: 1 },
        { name: 14, value: 35, directBet: 0, contents: [14], color: 'red', row: 2 },
        { name: 15, value: 35, directBet: 0, contents: [15], color: 'black', row: 3 },
        { name: 16, value: 35, directBet: 0, contents: [16], color: 'red', row: 1 },
        { name: 17, value: 35, directBet: 0, contents: [17], color: 'black', row: 2 },
        { name: 18, value: 35, directBet: 0, contents: [18], color: 'red', row: 3 },
        { name: 19, value: 35, directBet: 0, contents: [19], color: 'red', row: 1 },
        { name: 20, value: 35, directBet: 0, contents: [20], color: 'black', row: 2 },
        { name: 21, value: 35, directBet: 0, contents: [21], color: 'red', row: 3 },
        { name: 22, value: 35, directBet: 0, contents: [22], color: 'black', row: 1 },
        { name: 23, value: 35, directBet: 0, contents: [23], color: 'red', row: 2 },
        { name: 24, value: 35, directBet: 0, contents: [24], color: 'black', row: 3 },
        { name: 25, value: 35, directBet: 0, contents: [25], color: 'red', row: 1 },
        { name: 26, value: 35, directBet: 0, contents: [26], color: 'black', row: 2 },
        { name: 27, value: 35, directBet: 0, contents: [27], color: 'red', row: 3 },
        { name: 28, value: 35, directBet: 0, contents: [28], color: 'black', row: 1 },
        { name: 29, value: 35, directBet: 0, contents: [29], color: 'black', row: 2 },
        { name: 30, value: 35, directBet: 0, contents: [30], color: 'red', row: 3 },
        { name: 31, value: 35, directBet: 0, contents: [31], color: 'black', row: 1 },
        { name: 32, value: 35, directBet: 0, contents: [32], color: 'red', row: 2 },
        { name: 33, value: 35, directBet: 0, contents: [33], color: 'black', row: 3 },
        { name: 34, value: 35, directBet: 0, contents: [34], color: 'red', row: 1 },
        { name: 35, value: 35, directBet: 0, contents: [35], color: 'black', row: 2 },
        { name: 36, value: 35, directBet: 0, contents: [36], color: 'red', row: 3 }, // 35
        // Specialty squares
        // 36
        {
            name: '-1st 12-',
            value: 2.5,
            directBet: 0,
            contents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            color: 'red'
        },
        {
            name: '~2nd 12~',
            value: 2.5,
            directBet: 0,
            contents: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            color: 'red'
        },
        {
            name: '~3rd 12~',
            value: 2.5,
            directBet: 0,
            contents: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            color: 'red'
        },
        {
            name: '-1 thru 18-',
            value: 2,
            directBet: 0,
            contents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            color: 'red'
        },
        {
            name: '-18 thru 36-',
            value: 2,
            directBet: 0,
            contents: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            color: 'red'
        },
        // Odd/Even 41
        {
            name: 'EVEN',
            value: 2,
            directBet: 0,
            contents: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
            color: 'red'
        },
        {
            name: 'ODD',
            value: 2,
            directBet: 0,
            contents: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
            color: 'red'
        },
        // Red/Balck 43
        {
            name: 'ALL RED',
            value: 2,
            directBet: 0,
            contents: [1, 7, 16, 19, 25, 34, 5, 14, 23, 32, 3, 9, 12, 18, 21, 27, 30, 36],
            color: 'red'
        },
        {
            name: 'ALL BLACK',
            value: 2,
            directBet: 0,
            contents: [4, 10, 13, 22, 28, 31, 2, 8, 11, 17, 20, 26, 29, 35, 6, 15, 24, 33],
            color: 'black',
            grid: {
                'grid-column': 4 / 7,
                'grid-row': 7 / 8
            }
        },
        // Rows 45
        {
            name: 'ROW',
            value: 2,
            directBet: 0,
            contents: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
            color: 'red'
        },
        {
            name: 'ROW',
            value: 2,
            directBet: 0,
            contents: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
            color: 'red'
        },
        {
            name: 'ROW',
            value: 2,
            directBet: 0,
            contents: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
            color: 'red'
        }
    ];

    public lastTenNums = [];
    public winningNumber: number;
    public myFunds: number;
    public winningsPaneActive = false;
    public displayArray: any[] = [];

    constructor() {}

    ngOnInit() {
        this.myFunds = 500;
        this.lastTenNums.push(
            {
                name: 20,
                value: 35,
                directBet: 0,
                color: 'black',
                row: 2
            },
            {
                name: 21,
                value: 35,
                directBet: 0,
                color: 'red',
                row: 2
            }
        );
    }

    checkBets() {
        this.numberSquares.forEach((d, i) => {
            if (d.directBet) {
                console.log('Bets ', d.name, ' amount ', d.directBet);
            }
        });
    }

    onDrop(dropData, element) {
        // console.log('onDrop ', dropData, ' element ', element.directBet, ' $ ', this.myFunds);
        const value: number = Number(dropData.dropData);
        if (this.myFunds >= Number(dropData.dropData)) {
            element.directBet += value;
            this.myFunds -= value;
        }
    }

    // Determines winning returns
    processBets() {
        this.displayArray = [];
        this.numberSquares.forEach((d, i) => {
            if (d.directBet) {
                if (this.numberSquares[i].contents.includes(this.winningNumber)) {
                    console.log(
                        'WINNER! ',
                        this.numberSquares[i].name,
                        ' -',
                        d.directBet * d.value
                    );
                    this.displayArray.push({
                        name: this.numberSquares[i].name,
                        value: d.directBet * d.value
                    });
                    this.myFunds += d.directBet * d.value;
                } else {
                    console.log('No Winners!');
                }
            }
        });
    }

    // Clears all bets - Start the betting process over
    removeAllBets() {
        this.numberSquares.forEach((d, i) => {
            d.directBet = 0;
        });
        this.displayArray = [];
    }

    // Removes bet for single clicked slot
    removeBetValue(e) {
        this.myFunds += e.directBet;
        e.directBet = 0;
        this.myFunds += e.directBet;
        console.log('addBetValue ', e.directBet);
    }

    initToolEvent(e) {
        this.winningNumber = Number(e.value);
        if (this.lastTenNums.length === 10) {
            this.lastTenNums.shift();
        }
        this.lastTenNums.push(this.numberSquares[this.winningNumber - 1]);
        console.log('this.winningNumber ', e);
        this.processBets();
    }

    dragEnd(event) {
        console.log('Element was dragged', event);
    }

    displayWinnings() {
        this.winningsPaneActive = !this.winningsPaneActive;
    }

    getRandomColor(i) {
        if (i % 2 === 0) {
            return 'black';
        }
        return 'red';
    }
}
