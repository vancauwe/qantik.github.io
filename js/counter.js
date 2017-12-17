
function counter_percentage() {
    const options = {
	useEasing: true,
	useGrouping: true,
	decimal: '.',
	suffix: '%'
    };

    const counter = new CountUp('counter3', 0, 99.999, 3, 5.0, options);
    counter.start();
}

function counter_ve() {
    const options = {
	useEasing: true,
	useGrouping: true,
	decimal: '.',
	prefix: 'Vertices: ',
	suffix: ''
    };

    const counter = new CountUp('counter1', 0, 8274991, 0, 5.0, options);
    counter.start();

    options.prefix = 'Edges: ';
    const counter1 = new CountUp('counter2', 0, 86284396, 0, 5.0, options);
    counter1.start();
}


// var demo1 = new CountUp('counter1', 0, 8274991, 0, 5.0, options);
// if (!demo1.error) {
//   demo1.start();
// } else {
//   console.error(demo1.error);
// }

// options.prefix = 'Number of edges: '
// var demo2 = new CountUp('counter2', 0, 86284396, 0, 5.0, options);
// if (!demo2.error) {
//   demo2.start();
// } else {
//   console.error(demo2.error);
// }
