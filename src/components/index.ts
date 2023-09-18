import EForm from "./EForm/index.vue";
import ETable from "./ETable/index.vue";

// 按需引入
export { EForm, ETable };

const component = [EForm, ETable];

export default {
  install(app:any) {
		component.forEach((item) => {
			console.log(item)
			app.component(item.name, item);
		});
	},
};
