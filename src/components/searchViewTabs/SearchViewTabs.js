import React from 'react';
import PropTypes from 'prop-types';
import { SUPPORTED_COLUMNS_NUMS } from '../../services/LayoutService';
import './searchViewTabs.css';

const columnButtons = [
  { columns: 1, title: 'Show in 1 column', icon: 'oi oi-list' },
  { columns: 3, title: 'Show in 3 columns', icon: 'oi oi-grid-three-up' },
  { columns: 4, title: 'Show in 4 columns', icon: 'oi oi-grid-four-up' },
];

export class SearchViewTabs extends React.Component {
  static propTypes = {
    columnsNum: PropTypes.oneOf(SUPPORTED_COLUMNS_NUMS).isRequired,
    onColumnsNumbChange: PropTypes.func.isRequired,
  };

  onButtonClick = (columnsNum) => {
    const { onColumnsNumbChange } = this.props;
    onColumnsNumbChange(columnsNum);
  };

  render() {
    const { columnsNum } = this.props;

    const buttons = columnButtons.map((columnButton) => {
      const buttonClass = columnButton.columns === columnsNum
        ? 'btn btn-dark tab-selector-button'
        : 'btn btn-light tab-selector-button';

      return (
        <button
          key={`button_${columnButton.columns}`}
          type="button"
          className={buttonClass}
          onClick={() => this.onButtonClick(columnButton.columns)}
          title={columnButton.title}
        >
          <span className={columnButton.icon} />
        </button>
      );
    });

    return (
      <div className="btn-group btn-group-sm mb-3">
        {buttons}
      </div>
    );
  }
}
