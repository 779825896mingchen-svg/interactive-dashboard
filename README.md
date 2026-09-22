# Interactive Dashboard

## Weekly Task Goals
This feature calculates a user's task targets based on their daily goals and weekly bonuses. 
Users input their name, daily task goal (Monday-Friday), and any bonus tasks for the week. 
The calculator then displays the weekly goal (daily goal × 5 days), the bonus tasks, and the total weekly goal. 
This helps users track and plan their weekly productivity targets effectively.

## Future Enhancements
- [x] Add a weekly task goal calculator
- [ ] Add a monthly task goal calculator
- [ ] Implement local storage for saving goals
- [ ] Add visual charts for task progress
- [ ] Include a task completion tracker

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

## Magic Eight Ball

An interactive "fortune teller" game. Type a yes/no question, click the Magic Eight Ball, and receive a random answer. Click **"Ask another question"** to reset and try again.

**Technical features:**
- JavaScript array of responses with `Math.random()` index selection
- `addEventListener` for `mousedown` (on the ball) and `click` (on reset)
- Input validation with an `alert` if the field is empty
- CSS animation shakes the ball when an answer is revealed


🔗 **View the live dashboard here:** [https://779825896mingchen-svg.github.io/interactive-dashboard/](https://779825896mingchen-svg.github.io/interactive-dashboard/)
