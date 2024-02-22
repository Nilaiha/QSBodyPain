function ButtonGroup({ resetShownAreas }) {
    return (
        <div className="button-group">
            <button className="button" onClick={resetShownAreas}>
                Reset
            </button>
        </div>
    );
}

export default ButtonGroup;
