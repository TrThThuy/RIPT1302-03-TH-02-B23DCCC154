// Sample data for the scatter plot
var data = [
  { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16], mode: 'markers', type: 'scatter' }
];

var layout = {
  title: 'Scatter Plot Example',
  xaxis: {
    title: 'X Axis'
  },
  yaxis: {
    title: 'Y Axis'
  }
};
Plotly.newPlot('scatter-plot', data, layout);
// Sample data for the line chart
var data = [
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 5, 7, 9],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Series 1'
  },
  {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 6, 8, 10],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Series 2'
  }
];

// Layout options for the line chart
var layout = {
  title: 'Line Chart Example',
  xaxis: {
    title: 'X Axis'
  },
  yaxis: {
    title: 'Y Axis'
  }
};

// Plot the line chart
Plotly.newPlot('line-chart', data, layout);
// Dữ liệu mẫu cho biểu đồ cột
var data = [
  {
    x: ['A', 'B', 'C', 'D', 'E'],
    y: [10, 20, 15, 25, 30],
    type: 'bar', // Loại biểu đồ: cột
    marker: {
      color: 'rgb(55, 128, 191)' // Màu của cột
    }
  }
];

// Tùy chọn bố cục cho biểu đồ cột
var layout = {
  title: 'Bar Chart Example',
  xaxis: {
    title: 'Categories' // Tiêu đề trục x
  },
  yaxis: {
    title: 'Values' // Tiêu đề trục y
  }
};

// Vẽ biểu đồ cột
Plotly.newPlot('bar-chart', data, layout);
// Dữ liệu mẫu cho biểu đồ tròn
var data = [
  {
    labels: ['A', 'B', 'C', 'D', 'E'], // Nhãn cho các phần
    values: [20, 30, 15, 10, 25], // Giá trị tương ứng với mỗi phần
    type: 'pie' // Loại biểu đồ: tròn
  }
];

// Tùy chọn bố cục cho biểu đồ tròn
var layout = {
  title: 'Pie Chart Example'
};

// Vẽ biểu đồ tròn
Plotly.newPlot('pie-chart', data, layout);
// Dữ liệu mẫu cho biểu đồ donut
var data = [
  {
    labels: ['A', 'B', 'C', 'D', 'E'], // Nhãn cho các phần
    values: [20, 30, 15, 10, 25], // Giá trị tương ứng với mỗi phần
    type: 'pie', // Loại biểu đồ: tròn
    hole: 0.4 // Đường kính lỗ tròn (0.4 = 40%)
  }
];

// Tùy chọn bố cục cho biểu đồ donut
var layout = {
  title: 'Donut Chart Example'
};

// Vẽ biểu đồ donut
Plotly.newPlot('donut-chart', data, layout);
// Dữ liệu mẫu cho biểu đồ bubble
var data = [
  {
    x: [1, 2, 3, 4, 5], // Dữ liệu trên trục x
    y: [10, 20, 30, 40, 50], // Dữ liệu trên trục y
    mode: 'markers', // Chế độ: markers (các điểm)
    marker: {
      size: [20, 30, 40, 50, 60] // Kích thước của các điểm (bubble)
    }
  }
];

// Tùy chọn bố cục cho biểu đồ bubble
var layout = {
  title: 'Bubble Chart Example',
  xaxis: {
    title: 'X Axis'
  },
  yaxis: {
    title: 'Y Axis'
  }
};

// Vẽ biểu đồ bubble
Plotly.newPlot('bubble-chart', data, layout);
      



  
