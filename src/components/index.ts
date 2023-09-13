import EForm from "./EForm/index.vue";

// 按需引入
export { EForm };

const component = [EForm];

export default {
  install(app:any) {
    console.log(app)
		component.forEach((item) => {
			app.component(item.name, item);
		});
	},
};
