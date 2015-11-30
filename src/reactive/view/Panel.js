import most from 'most';

export default (panelElement) => {
    const startButton = panelElement.getElementsByClassName('start')[0];
    const stopButton = panelElement.getElementsByClassName('stop')[0];
    const stepButton = panelElement.getElementsByClassName('step')[0];

    const start$ = most.fromEvent('click', startButton);
    const stop$ = most.fromEvent('click', stopButton);
    const step$ = most.fromEvent('click', stepButton);

    return {
        start$,
        stop$,
        step$
    };
};
