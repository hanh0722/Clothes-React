import React from 'react';
import BlogComponent from '../blogComponent/blogComponent';
// get data from database to setup blog array

class Blog extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [],
            array: [],
            currentPage: 1,
            blogsPerPage: 6,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // CHANGE fetch to our database and server
    componentDidMount(){
        fetch('https://clothesreactapp.herokuapp.com/blog')
        .then(response => response.json())
        .then(data =>{
            this.setState({data: data});
        })
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    render(){
        const { data, currentPage, blogsPerPage } = this.state;
        const indexOfLastTodo = currentPage * blogsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderBlogs = currentTodos.map((items, index) =>{
            return <BlogComponent key={index}
            url={`http://localhost:3000/img/${items.url}`}
            title={items.title}
            content={items.contentblog}
            link={items.title}
            />
        })
        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(data.length / blogsPerPage); i++){
            pageNumber.push(i);
        }
        const RenderPageNumber = pageNumber.map(items =>{
            return <li key={items} onClick={this.handleClick} id={items}>{items}</li>
        })
        return(
            <div className='container-section container-blog'>
                <div className='container-component-blog'>
                    {renderBlogs}
                    <div className='pagination-blog'>
                        {RenderPageNumber}
                    </div>
                </div>
                <div className='container-time-links'>
                </div>
            </div>

        )
    }
}

export default Blog;