import React from "react";
import BackgroundHoh from "../../components/Background/BackgroundHoh";
import { Wrapper } from "./Getstarted.style";
import Modal from "../../components/Modal/Modal";
import StepWizard from "react-step-wizard";
import AddVideo from "./AddVideo";
import AddVideoInfo from "./AddVideoInfo";
import AddHotSpot from "./AddHotSpot";
import PreviewVideo from "./PreviewVideoAndVideoSetting";

class GetstartedContainer extends React.Component {
  state = {
    url: "https://www.youtube.com/watch?v=bdxprExLyN0",
    videoInfo: { header: null, category: "something" },
    hotspots: [{ a: 1 }, { a: 2 }, { a: 3 }],
    header: null
  };

  handleChange = (e, val) => {
    if (val) {
      console.log(val);
      this.setState({
        [e.target.id]: {
          ...this.state[e.target.id],
          [val]: e.target.value
        }
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };

  addEmptyHotSpot = () => {
    this.setState({
      ...this.state,
      hotspots: [...this.state.hotspots, {}]
    });
  };

  deleteHotSpots = key => {
    // it will delete hotSpots
    const hotsp = this.state.hotspots.filter((item, index) => {
      return key !== index;
    });
    this.setState({
      ...this.state,
      hotspots: hotsp
    });
    console.log(this.state.hotspots);
  };
  setHeader = value => {
    this.setState({ header: value });
  };

  render() {
    return (
      <BackgroundHoh>
        <Wrapper>
          <Modal header={this.state.header} className="modal">
            <StepWizard>
              <AddVideo
                state={this.state}
                handleChange={this.handleChange}
                setHeader={this.setHeader}
              />
              <AddVideoInfo
                state={this.state}
                handleChange={this.handleChange}
                setHeader={this.setHeader}
              />
              <AddHotSpot
                state={this.state}
                handleChange={this.handleChange}
                setHeader={this.setHeader}
                addEmptyHotSpot={this.addEmptyHotSpot}
                deleteHotSpots={this.deleteHotSpots}
              />
              <PreviewVideo
                state={this.state}
                handleChange={this.handleChange}
                setHeader={this.setHeader}
              />
            </StepWizard>
          </Modal>
        </Wrapper>
      </BackgroundHoh>
    );
  }
}
export default GetstartedContainer;
