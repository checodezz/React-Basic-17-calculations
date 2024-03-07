import "./App.css";

//1. Create a React component called GenerateGreeting, which has a function to return the Greeting. - "Hello John!". Pass the user name as argument.

const GenerateGreeting = () => {
  const greeting = (name) => {
    return "Hello, " + name;
  };

  return <h1>{greeting("Chethan")}</h1>;
};

//2. Create a React component called CalculateArea, which has a function to calculate the area of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

const CalculateArea = () => {
  const area = (length, width) => {
    return length * width;
  };

  return <p>Rectangle Area : {area(10, 5)} </p>;
};

//3. Create a React component called CalculatePerimeter, which has a function to calculate the perimeter of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

const CalclatePerimeter = () => {
  const findPerimeter = (length, width) => {
    return 2 * (length + width);
  };
  return <p>Rectangle Perimeter: {findPerimeter(10, 5)}</p>;
};


//4. Create a React component called GenerateMessage, which has a function to get the hours of the day and based on that displays appropriate message. Use the date method getHours to get the hours. If hours is less than 12 then show the message "Good Morning!". If hours is less than 18 then show the message "Good Afternoon!". And if hours is 18 or above then show the message "Good Evening!".

const GenreateMessage = () => {
  const getHours = () => {
   const hour =  new Date().getHours();
   return hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!" 
  }
  return (
   <h1>{getHours()}</h1>
  )
}

//5. Create a React component named CalculateVolume, to find the volume of cylinder. The radius of the cylinder is 3 cm and height is 5 cm.

const CalculateVolume = () => {
  const findVolume = (radius, height) => {
    return Math.PI * (radius**2 * height)
  }

return <p>Volume of Cylinder: {findVolume(3,5)}</p>
}

export default function App() {
  return (
    <main>
      <GenerateGreeting />
      <CalculateArea />
      <CalclatePerimeter />
      <GenreateMessage/>
      <CalculateVolume/>
    </main>
  );
}
