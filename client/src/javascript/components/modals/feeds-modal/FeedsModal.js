import {injectIntl} from 'react-intl';
import React from 'react';

import DownloadRulesTab from './DownloadRulesTab';
import FeedMonitorStore from '../../../stores/FeedMonitorStore';
import FeedsTab from './FeedsTab';
import Modal from '../Modal';

class FeedsModal extends React.Component {
  componentDidMount() {
    FeedMonitorStore.fetchFeedMonitors();
  }

  render() {
    const tabs = {
      feeds: {
        content: FeedsTab,
        label: this.props.intl.formatMessage({
          id: 'feeds.tabs.feeds',
        }),
      },
      downloadRules: {
        content: DownloadRulesTab,
        label: this.props.intl.formatMessage({
          id: 'feeds.tabs.download.rules',
        }),
      },
    };

    return (
      <Modal
        dismiss={this.props.dismiss}
        heading={this.props.intl.formatMessage({
          id: 'feeds.tabs.heading',
        })}
        orientation="horizontal"
        size="large"
        tabs={tabs}
      />
    );
  }
}

export default injectIntl(FeedsModal);
