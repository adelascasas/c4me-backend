import React, { Component } from 'react';
import { Container, Col} from 'reactstrap';
export default class Searchcollege extends Component {
	constructor(props){
		super(props);
		
		this.onChangeStrict = this.onChangeStrict.bind(this);
		this.onChangesatMath1 = this.onChangesatMath1.bind(this);
		this.onChangesatMath2 = this.onChangesatMath2.bind(this);
		this.onChangesatErwb1 = this.onChangesatErwb1.bind(this);
		this.onChangesatErwb2 = this.onChangesatErwb2.bind(this);
		this.onChangeAct1 = this.onChangeAct1.bind(this);
		this.onChangeAct2 = this.onChangeAct2.bind(this);
		this.onChangeAdmitRate1 = this.onChangeAdmitRate1.bind(this);
		this.onChangeAdmitRate2 = this.onChangeAdmitRate2.bind(this);
		this.onChangeTuition = this.onChangeTuition.bind(this);
		this.onChangeLocation = this.onChangeLocation.bind(this);
		this.onChangeMajor1 = this.onChangeMajor1.bind(this);
		this.onChangeMajor2 = this.onChangeMajor2.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.onChangeRanking1 = this.onChangeRanking1.bind(this);
		this.onChangeRanking2 = this.onChangeRanking2.bind(this);
		this.onChangeSize1 = this.onChangeSize1.bind(this);
		this.onChangeSize2 = this.onChangeSize2.bind(this);
		this.onChangeSort = this.onChangeSort.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			strict: false,
			satMath1: "",
			satMath2: "",
			satErwb1: "",
			satErwb2: "",
			act1: "",
			act2: "",
			admitRate1: "",
			admitRate2: "",
			tuition: "",
			Location: "",
			major1: "",
			major2: "",
			input: "",
			ranking1: "",
			ranking2: "",
			size1: "",
			size2: "",
			sort: "",
			colleges: []
		}
	}
	componentDidMount(){
		this.setState({
			colleges: []
		})
	}
	
	onChangeStrict(e){
		this.setState({
			strict: e.target.checked
		});
	}
	onChangesatMath1(e){
		this.setState({
			satMath1: e.target.value
		});
	}
	onChangesatMath2(e){
		this.setState({
			satMath2: e.target.value
		});
	}
	onChangesatErwb1(e){
		this.setState({
			satErwb1: e.target.value
		});
	}
	onChangesatErwb2(e){
		this.setState({
			satErwb2: e.target.value
		});
	}
	onChangeAct1(e){
		this.setState({
			act1: e.target.value
		});
	}
	onChangeAct2(e){
		this.setState({
			act2: e.target.value
		});
	}
	onChangeAdmitRate1(e){
		this.setState({
			admitRate1: e.target.value
		});
	}
	onChangeAdmitRate2(e){
		this.setState({
			admitRate2: e.target.value
		});
	}
	onChangeTuition(e){
		this.setState({
			tuition: e.target.value
		});
	}
	onChangeLocation(e){
		this.setState({
			Location: e.target.value
		});
	}
	onChangeMajor1(e){
		this.setState({
			major1: e.target.value
		});
	}
	onChangeMajor2(e){
		this.setState({
			major2: e.target.value
		});
	}
	onChangeInput(e){
		this.setState({
			input: e.target.value
		});
	}
	onChangeRanking1(e){
		this.setState({
			ranking1: e.target.value
		});
	}
	onChangeRanking2(e){
		this.setState({
			ranking2: e.target.value
		});
	}
	onChangeSize1(e){
		this.setState({
			size2: e.target.value
		});
	}
	onChangeSize2(e){
		this.setState({
			size2: e.target.value
		});
	}
	onChangeSort(e){
		this.setState({
			sort: e.target.value
		});
	}
	onSubmit(e){
		e.preventDefault();
		const filters = {
			strict: this.state.strict,
			satMath1: this.state.satMath1,
			satMath2: this.state.satMath2,
			satErwb1: this.state.satErwb1,
			satErwb2: this.state.satErwb2,
			act1: this.state.act1,
			act2: this.state.act2,
			admitRate1: this.state.admitRate1,
			admitRate2: this.state.admitRate2,
			tuition: this.state.tuition,
			Location: this.state.Location,
			major1: this.state.major1,
			major2: this.state.major2,
			input: this.state.input,
			ranking1: this.state.ranking1,
			ranking2: this.state.ranking2,
			size1: this.state.size1,
			size2: this.state.size2,
			sort: this.state.sort
		}
		console.log(filters)
	}
	render(){
		return (
			<main className="my-5 py-5">
				<Container className="px-0">
					<Col xs={{ order: 2 }} md={{ size: 4, order:1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
					<form onSubmit={this.onSubmit}>
						<h1> Search Filters </h1>
						<label> Name: </label>
						<input 
							type="text"
							className="form-control"
							value={this.state.input}
							onChange={this.onChangeInput}
						/>
						<label> SAT math lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.satMath1}
							onChange={this.onChangesatMath1}
						/>
						<label> SAT math upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.satMath2}
							onChange={this.onChangesatMath2}
						/>
						<label> SAT Erwb lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.satErwb1}
							onChange={this.onChangesatErwb1}
						/>
						<label> SAT Erwb upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.satErwb2}
							onChange={this.onChangesatErwb2}
						/>
						<label> ACT lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.act1}
							onChange={this.onChangeAct1}
						/>
						<label> ACT Upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.act2}
							onChange={this.onChangeAct2}
						/>
						<label> Admit rate lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.admitRate1}
							onChange={this.onChangeAdmitRate1}
						/>
						<label> Admit rate upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.admitRate2}
							onChange={this.onChangeAdmitRate2}
						/>
						<label> Tuition Cost : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.tuition}
							onChange={this.onChangeTuition}
						/>
						<label> Location : </label>
						<select ref="userInput"
							className="form-control"
							value={this.state.Location}
							onChange={this.onChangeLocation}>
							<option value=""> </option>
							<option value="Northeast"> Northeast </option>
							<option value="Midwest"> Midwest </option>
							<option value="South"> South </option>
							<option value="West"> West </option>
						</select>
						<label> Major1 : </label>
						<input 
							type="text"
							className="form-control"
							value={this.state.major1}
							onChange={this.onChangeMajor1}
						/>
						<label> Major2 : </label>
						<input 
							type="text"
							className="form-control"
							value={this.state.major2}
							onChange={this.onChangeMajor2}
						/>
						<label> Ranking lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.ranking1}
							onChange={this.onChangeRanking1}
						/>
						<label> Ranking Upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.ranking2}
							onChange={this.onChangeRanking2}
						/>
						<label> Student Population lower bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.size1}
							onChange={this.onChangeSize1}
						/>
						<label> Student Population upper bound : </label>
						<input 
							type="number"
							className="form-control"
							value={this.state.size2}
							onChange={this.onChangeSize2}
						/>
						<label> Sort By: </label>
						<select ref="userInput"
							className="form-control"
							value={this.state.sort}
							onChange={this.onChangeSort}>
							<option value=""> </option>
							<option value="Name"> Name </option>
							<option value="Admission rate"> Admission rate </option>
							<option value="Cost of attendance"> Cost of attendance</option>
							<option value="Ranking"> Ranking </option>
						</select>
						<label> Strict?:  </label>
						<input
							type="checkbox"
							checked={this.state.strict}
							onChange={this.onChangeStrict}
						/>
						<div className="form-group">
							<input type="submit" value="Filter" className="btn btn-primary" />
						</div>
					</form>			
					</Col>
					</Container>
					</main>
		)
	}
}
