import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, Radio } from "@material-ui/core";
import i18n from "./i18n/i18n";

const useStyles = makeStyles((theme: Theme) => ({
  codeSample: {
    border: "solid 1px black",
    backgroudColor: "gray"
  }
}));
const I18nextTest: React.FC = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState("en");

  const handleChange = (event) => {
    console.log(event.target.value);
    let newlang = event.target.value;
    setValue(newlang);
    i18n.changeLanguage(newlang);
  };

  const handleNameSpaceChange = (event) => {
    console.log("안녕!?!!??", event.target.value);
    let namespace = event.target.value;
    i18n.setDefaultNamespace(namespace);
  };

  const { t } = useTranslation();
  return (
    <div className="App">
      <div>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select Language</FormLabel>

                <RadioGroup
                  aria-label="lang"
                  name="lang"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="ko"
                    control={<Radio />}
                    label="Korean"
                  />
                  <FormControlLabel
                    value="en"
                    control={<Radio />}
                    label="English"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select namespace</FormLabel>

                <RadioGroup
                  aria-label="namespace"
                  name="namespace"
                  value={value}
                  onChange={handleNameSpaceChange}
                >
                  <FormControlLabel
                    value="label1"
                    control={<Radio />}
                    label="NameSpace - label(1)"
                  />
                  <FormControlLabel
                    value="label2"
                    control={<Radio />}
                    label="NameSpace - label(2)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Typography variant="h4" gutterBottom>
                <Trans>{t("t.title")}</Trans>
                <Typography variant="subtitle2" gutterBottom>
                  <h4>1.태그만 있을때 </h4>
                  <div className={classes.codeSample}>
                    <Trans i18nKey="t.test_tag">t( "t.test_tag" )</Trans>
                  </div>
                  <h4>2-1.변수와 태그가 함께 있을때</h4>
                  <div className={classes.codeSample}>
                    <Trans
                      i18nKey="t.test_tag_variable"
                      values={{
                        name: "dalsomin",
                        level: "gold"
                      }}
                    >
                      t("t.test_tag_variable")
                    </Trans>
                  </div>
                  <h4>2-2. 변수가 숫자로 들어올때</h4>
                  <div className={classes.codeSample}>
                    <Trans
                      i18nKey="t.test_index"
                      values={{
                        0: "somin",
                        1: "coffee",
                        2: "yogurt",
                        3: "music"
                      }}
                    >
                      t("t.test_index")
                    </Trans>
                  </div>
                </Typography>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// extended main view with translate hoc

I18nextTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default I18nextTest;
