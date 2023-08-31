import classes from "./ColumnComponent.module.css";

const ColumnComponent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column1}>Column 1</div>
      <div className={classes.column2}>Column 2</div>
      <div className={classes.column3}>Column 3</div>
    </div>
  );
};

export default ColumnComponent;
