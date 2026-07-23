export default class ComponentRepository {
    constructor() {
        this.components = new Map();
    }

    addComponent(component) {
        this.components.set(component.name, component);
    }

    getComponent(name) {
        return this.components.get(name);
    }

    getAllComponents() {
        return [...this.components.values()];
    }

    print() {
        this.components.forEach(component => {
            component.print();
        });
    }
}