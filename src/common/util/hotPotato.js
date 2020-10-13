import Queue from '../queue';

let HotPotato = (elementsList, num) => {
    const queue = new Queue();
    const elimitatedList = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

export default HotPotato;