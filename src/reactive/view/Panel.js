import most from 'most';

export default (panelElement) => {
    const startButton = panelElement.getElementsByClassName('start')[0];
    const stopButton = panelElement.getElementsByClassName('stop')[0];
    const stepButton = panelElement.getElementsByClassName('step')[0];
    const randomButton = panelElement.getElementsByClassName('random')[0];
    const emptyButton = panelElement.getElementsByClassName('empty')[0];

    const start$ = most.fromEvent('click', startButton);
    const stop$ = most.fromEvent('click', stopButton);
    const step$ = most.fromEvent('click', stepButton);
    const random$ = most.fromEvent('click', randomButton);
    const empty$ = most.fromEvent('click', emptyButton);

    return {
        start$,
        stop$,
        step$,
        random$,
        empty$
    };
};
