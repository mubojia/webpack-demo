// 双向链表
import Util from './util';
import LinkedList from './linkedList';
import { Nodes } from './nodes';

class DoubleLinkedList extends LinkedList {

    constructor(equalsFn = Util.defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {

        // 检测index是否超出范围,超出范围返回false
        if(index >= 0 && index <= this.count){

            const node = new Nodes(element);
            let current = this.head;

            // 插入链表第一个元素
            if(index == 0){

                // 校验链表是否为空
                if(this.head == null){

                    // 添加第一个元素
                    this.head = node; 

                    // 添加链表的最后一个元素
                    this.tail = node;  
                
                // 链表不为空
                } else {

                    // 将链表中的元素都添加为新节点的子元素
                    node.next = this.head;

                    // 记录第二节点的上一个节点
                    current.prev = node;

                    // 更新节点为续借后的node链表
                    this.head = node;

                }
            
            // 在链表尾部新增
            } else if(index === this.count) {

                // 获取链表最后一个节点
                current = this.tail;

                // 续借新节点
                current.next = node;

                // 记录新加节点的上一个元素
                node.prev = current;

                // 更新最后一个元素
                this.tail = node;
                
            // 在链表中间新增
            } else {

                // 获取当前索引的节点
                const previous = this.getElementAt(index - 1);

                // 获取当前索引节点的下一个节点
                current = previous.next;

                // 将索引后的节点作为子元素补至新加节点
                node.next = current;
                
                // 向当前索引后续添加新节点
                previous.next = node;

                // 记录索引后续节点的上一个新节点
                current.prev = node;

                // 给新加节点添加上一个节点元素
                node.prev = previous;

            }

            this.count++;

            return true;
        }

        return false;
    }

    removeAt(index) {
        if(index >= 0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            } else if (index === this.count) {

                // 获取最后个元素
                current = this.tail;

                // 更新最后元素
                this.tail = current.prev;

                // 删除最后元素的子元素
                this.tail.next = undefined;

            } else {

                // 获取当前索引的节点，即：将要删除的节点
                const current = this.getElementAt(index);

                // 需要删除节点的上一个节点
                const previous = current.prev;
                
                // 将需要删除节点的上一个节点指向需要删除节点的下一个元素
                previous.next = current.next;

                // 续接节点的上一个元素的指针替换
                current.next.prev = previous;

            }

        }
        return undefined;
    }

}

export default DoubleLinkedList;