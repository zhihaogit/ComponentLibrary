<script>
export default {
    name: 'Layout',
    render() {
        return <div>
            { this.$slots.default }
        </div>;
    },
};
</script>
