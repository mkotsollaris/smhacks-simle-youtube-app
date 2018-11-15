import YTSearch from 'youtube-search';

const API_KEY = "";

export function searchByTerm(searchTerm) {
    console.log('searchbyterm: ',searchTerm)
    return {
        type: 'MTYPE',
        payload: searchTerm
    }
    // console.log('@searchByTerm:',searchByTerm);
    // YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
    //     console.log('videos: ',videos);
    //     // this.setState({
    //     //   videos: videos,
    //     //   selectedVideo: videos[0]
    //     //  });
    //   });
}

