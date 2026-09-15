 # Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
 ## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.

## Imperial/Metric Converter

This application is a web-based tool that converts between Imperial and Metric units of length. Users can enter a numeric value, select a conversion type, and instantly see the result. The converter supports the following units:

- **Imperial:** inch, foot, yard, mile
- **Metric:** centimeter, meter, kilometer

### Logic and Pseudocode

BEGIN
PROMPT user for numeric value
PROMPT user for conversion type (from dropdown)

IF input is not a valid number THEN
DISPLAY error message
ELSE
CONVERT value based on selected conversion type:

inches to centimeters: value * 2.54

feet to meters: value * 0.3048

yards to meters: value * 0.9144

miles to kilometers: value * 1.60934

centimeters to inches: value / 2.54

meters to feet: value / 0.3048

kilometers to miles: value / 1.60934
DISPLAY result as "X [from_unit] is Y [to_unit]"
END IF
END

🔗 **View the live dashboard here:** [https://779825896mingchen-svg.github.io/interactive-dashboard/](https://779825896mingchen-svg.github.io/interactive-dashboard/)
