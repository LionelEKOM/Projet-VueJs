const app = Vue.createApp({
    data() {
        return {
            product: "Pamplemousse",
            type: "Jaune",
            price: 1000,
            image: "Assets/images/pamplemousse.jpeg",
            count: 0,
            sale: false,
            notAvailable: true,
            ingredients: [
                "Olives",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf",
                "Poulets rotis"
            ],
            sauces: [
                {
                    id: 1001,
                    type: "Sauce Tomate",
                    color: "#db4006",
                    image: "Assets/images/pizza1-tomate.jpg"
                },
                {
                    id: 1002,
                    type: "Creme Fraiche",
                    color: "#e9cb8f",
                    image: "Assets/images/pizza1-creme.jpg"
                }
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Proteines: 9.62,
                Sel: 11
            },
            totalPrice: 0,
            nbrProduct: 0,
            promo: ""
        }
    },
    methods: {
        addProduct() {
            if (this.sale) {
                this.nbrProduct += 1;
                this.totalPrice += this.price - 500;
            } else {
                this.nbrProduct += 1;
                this.totalPrice += this.price;
            }
        },
        updateImage(newLinkImage) {
            this.image = newLinkImage;
        },
    },
    computed: {
        title() {
            return this.product + " " + this.type;
        }
    }
})