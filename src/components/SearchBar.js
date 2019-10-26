import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div class="input-group md-form form-sm form-1 pl-0 my-5">
                <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search"/>
                    <div class="input-group-append">
                        <span class="input-group-text lime lighten-2" id="basic-text1">
                            <i class="fas fa-search text-grey" aria-hidden="true"></i>
                        </span>
                    </div>
            </div>
        )
    }
}
