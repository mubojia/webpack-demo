// 链表
import Util from '../Util/Util';
import { Nodes } from '../../models/Nodes';

export default class LinkedList {

    constructor(equalsFn = Util.defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    // 传递增加项的值，没有返回值
    push(element) {

        // 获取添加元素
        let node = new Nodes(element);
        // 当前元素
        let current;

        // 检验是否为空链表
        if (this.count == 0) {
            // 向链表添加
            this.head = node;
        } else {
            current = this.head;

            // 循环当前项，检测该项是否有下级元素，有的话将current的改为该项元素的下级元素
            while (current.next != null) {
                // 向链表添加
                current = current.next;
            }

            // 添加元素
            current.next = node;
        }

        // 元素总数加一
        this.count++;

    }

    // 删除任意位置的元素，返会删除的元素
    removeAt(index) {

        // 检验index没有超过链表的范围，如果超过返会undefined
        if (index >= 0 && index < this.count) {

            // 当前元素
            let current = this.head;

            // 检测是否删除第一个元素
            if (index === 0) {

                // 删除第一个元素，并且总数减一
                this.head = current.next;

            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }
        return undefined;

    }

    remove(element) {
        const index = this.indexOf(element);
        this.removeAt(index);
    }

    getHead() {
        return this.head;
    }

    // 传入增加的元素和添加的位置，返回布尔值
    insert(element, position) {

        // 检测position是否超过范围，超过的话返回false
        if (position >= 0 && position <= this.count) {

            // 获取需要增加的元素
            const node = new Nodes(element);

            // 判断需要添加的元素是否为第一个
            if (position == 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }

            // 总数加一
            this.count++

            // 返回成功
            return true;
        }
        return false;
    }

    // 传入索引值，返回该位置的元素
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    // 传入一个元素，返回链表中元素的位置
    indexOf(element) {
        let current = this.head;

        // 循环链表，当两个值相同时，返回当前索引值
        for (let i = 0; i < this.count; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }

        // 返回索引值
        return -1;

    }

    isEmpty() {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {

        // 如果链表为空，返回空字符串
        if(this.head == null) {
            return '';
        }

        // 转换第一个字符串，并且作为转换字符串的容器
        let objString = `${this.head.element}`;

        // 设定第二个元素为第一个需要循环的链表元素
        let current = this.head.next;

        // 循环链表，向容器中添加转换后的链表元素，由于容器中已经存在第一个转换后的元素，所以循环需要从索引值1开始
        for (let i = 1; i < this.size() && current != null; i++){

            // 将当前元素添加至字符串容器，并且由于模版字符串的原因：逗号之间不能有空格
            objString = `${objString},${current.element}`;

            // 切换当前元素为下一个链表元素
            current = current.next;
            
        }

        return objString;
    }

}