<script>
export default {
    name: 'AutoComplete',
    props: {
        value: {
            type: String,
            default: '',
            required: true,
        },
        valueKey: {
            type: String,
            default: 'value',
        },
        fetchSuggestions: Function,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            suggestions: [],
            suggestionsDisabled: false,
        };
    },
    computed: {
        suggestionVisible() {
            const suggestions = this.suggestions;
            let isValidData = Array.isArray(suggestions) && suggestions.length > 0;
            return isValidData && !this.suggestionsDisabled;
        },
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
            this.getData();
        },
        handleChange(e) {
            this.$emit('change', e.target.value);
        },
        getData(queryString) {
            if (this.disabled || this.suggestionsDisabled) return;
            this.fetchSuggestions(queryString, (suggestions) => {
                if (Array.isArray(suggestions)) this.suggestions = suggestions;
            });
        },
        select(item) {
            this.$emit('input', item[this.valueKey]);
            this.$emit('change', item[this.valueKey], item);
            this.suggestionsDisabled = true;
        },
    },
    render() {
        const {
            disabled,
            value,
            handleInput,
            handleChange,
            suggestions,
            valueKey,
            select,
            suggestionVisible,
        } = this;

        let menu = suggestions.map((_, i) => <div
            key={i}
            class='menu-item'
            onClick={select.bind(this, _)}
        >
            { _[valueKey] }
        </div>);
        return <div>
            {value}
            <div>
                <input
                    value={value}
                    type="text"
                    disabled={disabled}
                    onInput={handleInput.bind(this)}
                    onChange={handleChange.bind(this)}
                />
            </div>
            <div
                class={value && suggestionVisible ? 'menu display-block' : 'menu display-none'}
            >
                {...menu}
            </div>
        </div>;
    },
};
</script>

<style lang="less" scoped>
.display-block {
    display: block;
}
.display-none {
    display: none;
}
.menu {
    .menu-item {
        &:hover {
            background-color: #f5f7fa;
        }
    }
}
</style>
