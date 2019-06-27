import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { observable, action, computed } from 'mobx';
import { Observer, Provider } from 'mobx-react';

import { TopBar } from '@components/TopBar';
import { Dashboard } from '@views/Dashboard';

import './styles/Frame.css';

type PropsT = {};

class FrameStore {
	dockedMAHI = observable.box(true);

	@action toggleDockedMAHI = () => {
		this.dockedMAHI.set(!this.dockedMAHI.get());
	}

	@computed get docked() {
		return this.dockedMAHI.get();
	}
}

const AppStore = new FrameStore();

export const Frame = (props) => {
	return (
		<div styleName="Frame">
			<Provider appStore={AppStore}>
				<>
					<TopBar />
					<Router>
						<React.Fragment>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/client" component={Dashboard} />
						</React.Fragment>
					</Router>
				</>
			</Provider>
		</div>
	);
};
