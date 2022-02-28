import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const AccordionComonent = ({ expanded, setExpanded, itm }) => {
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    if (itm) {
      setChecked(itm.children);
    }
  }, [itm]);

  const handleChangeAccordion = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeParent = event => {
    let chech = event.target.checked;
    let obj = {};
    let data = [];
    checked.map((itm, ind) => {
      obj = {
        ...itm,
        active: chech
      };
      data.push(obj);
    });
    setChecked(data);
  };
  const handleChangeChild = (e, ind) => {
    // setChecked([event.target.checked, checked[1]]);
    let chech = e.target.checked;
    let obj = {};
    let data = [];
    checked.map((itm, index) => {
      if (index === ind) {
        obj = {
          ...itm,
          active: chech
        };
      } else {
        obj = {
          ...itm
        };
      }
      data.push(obj);
    });
    setChecked(data);
  };

  const ChildrenCheckBox = () => {
    return checked?.map((itm, ind) => (
      <div className="w-50">
        <FormControlLabel
          label={itm.name}
          control={
            <Checkbox
              checked={itm.active}
              style={{ color: "#4a9ef1" }}
              onChange={e => handleChangeChild(e, ind)}
            />
          }
          className="d-flex flex-row-reverse justify-content-between w-100 px-10"
        />
      </div>
    ));
  };
  const handleClickParent = event => {
    event.stopPropagation();
  };

  return (
    <>
      <Accordion
        expanded={expanded === `${itm.state}`}
        onChange={handleChangeAccordion(`${itm.state}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="w-50 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {" "}
              <span>{itm.title}</span>
            </div>
            <div>
              <FormControlLabel
                label="دسترسی"
                control={
                  <Checkbox
                    checked={checked?.every(itm => itm.active)}
                    // indeterminate={checked.some(
                    //   (itm: any) => itm.active!
                    // )}
                    style={{ color: "#4a9ef1" }}
                    onClick={handleClickParent}
                    onChange={e => handleChangeParent(e)}
                  />
                }
              />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-column">
          <ChildrenCheckBox />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComonent;
