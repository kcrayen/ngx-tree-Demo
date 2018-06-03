import { Injectable } from '@angular/core';
import { TreeviewItem, Employee } from '../lib/treeview-item';

export class departmentService {
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({
            text: 'Parent', value: 1, collapsed: true,checked:false,dfr:'Test',children: [
                { text: 'Child 1' ,dfr:'Test',value: 11 },
                { text: 'Child 2' ,dfr:'Test',value: 12 },
                { text: 'child 3' ,dfr:'Test',value: 13 }
            ]
        });

       
        // const itCategory = new TreeviewItem({
        //     text: 'ResponsibilityCode 2', value: 9,children: [
        //         {
        //             text: 'ResponsibilityCode 2.1', value: 91, children: [{
        //                 text: 'ResponsibilityCode 2.1.1', value: 911, children: [
        //                     { text: 'ResponsibilityCode 2.1.1.1', value: 9111 },
        //                     { text: 'ResponsibilityCode 2.1.1.2', value: 9113, disabled: true}
        //                 ]
        //             }, {
        //                 text: 'ResponsibilityCode 2.1.2', value: 912, children: [
        //                     { text: 'ResponsibilityCode 2.1.2.1', value: 9121 },
        //                     { text: 'ResponsibilityCode 2.1.2.2', value: 9122 },
        //                 ]
        //             }]
        //         },
        //         {
        //             text: 'ResponsibilityCode 2.2', value: 92, children: [
        //                 { text: 'ResponsibilityCode 2.2.1', value: 921 },
        //                 { text: 'ResponsibilityCode 2.2.2', value: 922 }
        //             ]
        //         }
        //     ]
        // });
        // const teenCategory = new TreeviewItem({
        //     text: 'ResponsibilityCode 3', value: 2, collapsed: true, disabled: true, children: [
        //         { text: 'ResponsibilityCode 3.1', value: 21 },
        //         { text: 'ResponsibilityCode 3.2', value: 22 }
        //     ]
        // });
        //const othersCategory = new TreeviewItem({ text: 'Others', value: 3, disabled: true });
        //return [childrenCategory, itCategory, teenCategory, othersCategory];
        return [childrenCategory];
    }
}
