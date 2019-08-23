<script>
export default {
    name: 'Home',
    render() {
        const {
            pushToPage,
        } = this;
        const pushToAutocomplete = pushToPage.bind(this, {
            name: 'autocomplete',
        });
        return <div>
            <div>Home</div>
            <button
                onClick={pushToAutocomplete}
            >Autocomplete Component</button>
        </div>;
    },
    methods: {
        pushToPage(routeInfo = {}) {
            this.$router.push(routeInfo);
        },
    },
};
</script>
