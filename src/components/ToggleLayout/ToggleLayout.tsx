import './ToggleLayout.css'

const ToggleLayout = ({ layout, setLayout }: { layout: 'grid' | 'table'; setLayout: (v: 'grid' | 'table') => void }) => {
    return (

        <button className='toggle-btn' onClick={() => setLayout(layout === 'grid' ? 'table' : 'grid')}>
            Switch to {layout === 'grid' ? "Table" : "Grid"} Layout
        </button>
    )
}

export default ToggleLayout