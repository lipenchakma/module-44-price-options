import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsMarks = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 74 },
        { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "David", math: 67, physics: 72, chemistry: 69 },
        { id: 5, name: "Eva", math: 74, physics: 70, chemistry: 76 },
        { id: 6, name: "Frank", math: 88, physics: 84, chemistry: 85 },
        { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
        { id: 8, name: "Hannah", math: 81, physics: 79, chemistry: 78 },
        { id: 9, name: "Ian", math: 69, physics: 74, chemistry: 72 },
        { id: 10, name: "Jack", math: 76, physics: 80, chemistry: 77 }
      ];

    return (
        <div>
            <LChart width={1000} height={400} data={studentsMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;