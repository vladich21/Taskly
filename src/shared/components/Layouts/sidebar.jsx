import './sidebar.css'
import '../../assets/styles/global.css'


const Sidebar = () => {
	return (
<aside className="sidebar">
			<div className="user-menu__header">
			<img src="./src/assets/images/Avatar.svg" alt="avatar" />
		<span className="user-menu__header">Name</span>
			</div>
			{/* <div className="user-menu__section">
				<span className="user-menu__title">Account</span>
				<button className="user-name__button">
					<img src="" alt="" />
					My profile
					</button>
					<button className="user-name__button">
					<img src="у" alt="" />
					Archived Tasks
					</button>
			</div>

			<div className="user-menu__section">
				<span className="user-menu__title">Preference</span>
				<button className="user-name__button">
					<img src="" alt="" />
					Theme
					</button>
					<button className="user-name__button">
					<img src="" alt="" />
					Background
					</button>
			</div> */}
			<button>
				<span>My tasks</span>
			</button>
			<button>
				<span>Next 7 days</span>
			</button>
			<button>
				<span>Calendar</span>
			</button>
			<div className="projects">
				<div className="projects__header">
				<button className="projects__arrow-button">&#9660;</button>
					<span className="projects__title">Projects</span>
					<button className="projects__add-button">+</button>
				</div>
				<ul className="projects__list">
					<li className="projects__item">
						<span className="projects__item-title">Everyday routine</span>
						<span className="projects__status projects__status--active"></span>
					</li>
					<li className="projects__item">
						<span className="projects__item-title">School project</span>
						<span className="projects__status projects__status--inactive"></span>
					</li>
				</ul>

				<div className="projects__group-header">
				<button className="projects__arrow-button">&#9660;
				</button>
					<span className="projects__group-title">Add group</span>
					<button className="projects__group-add-button">+
					</button>
				</div>

				<ul className="projects__group-list">
					<li className="projects__group-item">
						<span className="projects__folder-icon">P</span>
						<span className="projects__group-tem-title">Everyday</span>
						<button className="projects__arrow-button">&#9660;</button>
					</li>
					<li className="projects__group-item">
					<span className="projects__folder-icon">P</span>
						<span className="projects__group-item-title">School project</span>
						<button className="projects__arrow-button">&#9650;</button>
					</li>
				</ul>


			</div>
</aside>
	)}
	export default Sidebar;