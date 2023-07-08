import react from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [
        {
            id: 1,
            tagName: "JavaScript",
            tagDesc: "A high-level, interpreted programming language."
        },
        {
            id: 2,
            tagName: "Python",
            tagDesc: "A versatile, high-level programming language."
        },
        {
            id: 3,
            tagName: "Java",
            tagDesc: "A popular, object-oriented programming language."
        },
        {
            id: 4,
            tagName: "PHP",
            tagDesc: "A widely-used scripting language for web development."
        },
        {
            id: 5,
            tagName: "C++",
            tagDesc: "A general-purpose programming language known for efficiency."
        },
        {
            id: 6,
            tagName: "Ruby",
            tagDesc: "A dynamic, reflective, object-oriented language."
        },
        {
            id: 7,
            tagName: "C#",
            tagDesc: "A multi-paradigm programming language developed by Microsoft."
        },
        {
            id: 8,
            tagName: "HTML",
            tagDesc: "A standard markup language for creating web pages."
        },
        {
            id: 9,
            tagName: "CSS",
            tagDesc: "A stylesheet language used for describing the look and formatting of a document."
        },
        {
            id: 10,
            tagName: "SQL",
            tagDesc: "A domain-specific language used for managing and manipulating databases."
        }
    ];
    

    return (
        <div className='home-container-1'>
            <LeftSidebar/>
            <div className='home-container-2'>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with another, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag)=>(
                            <TagsList tag={tag} key={tagsList.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags