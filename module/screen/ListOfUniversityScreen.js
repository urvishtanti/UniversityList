// import React, {useEffect, useMemo} from 'react';
// import {View, Text, ActivityIndicator, FlatList} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchUniversity} from '../store/action';
// import Style from './Style';
// import {text} from '../constants/Text';
// import ListItem from './components/ListItem';
// import {Color} from '../constants/Color';
// import {sortedArray} from '../utils/util';

// const ListOfUniversityScreen = () => {
//   const dispatch = useDispatch();
//   const {universities, isFetching, error} = useSelector(
//     state => state.university,
//   );
//   const dataLimit = 25;

//   useEffect(() => {
//     dispatch(fetchUniversity());
//   }, [dispatch]);

//   const memoizedUniversitiesList = useMemo(
//     () => sortedArray(universities),
//     [universities],
//   );
//   /**
//    * local pagination as large array and api pagination is not present
//    * memoizing api api result in {memoizedUniversitiesList}
//    * setting only 25 items in flatlist initially to avoid performance issue
//    * appending rest items as user scrolls with offset of 25
//    */
//   const [universitiesList, setUniversities] = useState(
//     memoizedUniversitiesList,
//   );

//   const setList = useCallback(() => {
//     const list = memoizedUniversitiesList.slice(
//       universitiesList.length,
//       universitiesList.length + dataLimit,
//     );
//     const updatedList = sortedArray([...universitiesList, ...list]);
//     setUniversities(updatedList);
//   }, [universitiesList, memoizedUniversitiesList]);

//   return (
//     <View style={Style.container}>
//       <View style={Style.header}>
//         <Text style={Style.title}>{text.header}</Text>
//       </View>

//       <FlatList
//         data={universitiesList ?? []}
//         contentContainerStyle={Style.flex}
//         keyExtractor={(item, _) => item?.name}
//         renderItem={({item}) => <ListItem item={item} />}
//         onEndReached={setList}
//         ListEmptyComponent={() => {
//           if (isFetching) {
//             return <></>;
//           }
//           return (
//             <View style={Style.emptyListContainer}>
//               <Text style={Style.noItemText}>{text.unableToFetchData}</Text>
//             </View>
//           );
//         }}
//       />
//       {isFetching && (
//         <View style={Style.messageContainer}>
//           <ActivityIndicator
//             animating={true}
//             color={Color.black}
//             size="large"
//           />
//           <Text>{text.dataFetching}</Text>
//         </View>
//       )}
//       {error && (
//         <View style={Style.messageContainer}>
//           <Text>{text.somethingWentWrong}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default ListOfUniversityScreen;

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUniversity} from '../store/action';
import Style from './Style';
import {text} from '../constants/Text';
import ListItem from './components/ListItem';
import {Color} from '../constants/Color';
import {sortedArray} from '../utils/util';

const ListOfUniversityScreen = () => {
  const dispatch = useDispatch();
  const dataLimit = 50;
  const {universities, isFetching, error} = useSelector(
    state => state.university,
  );
  useEffect(() => {
    dispatch(fetchUniversity());
  }, [dispatch]);

  const memoizedUniversitiesList = useMemo(
    () => sortedArray(universities),
    [universities],
  );
  /**
   * local pagination as large array of items is in list and api pagination is not present
   * memoizing api result in {memoizedUniversitiesList}
   * setting only 50 items in flatlist initially to avoid performance issue
   * appending rest items as user scrolls with increment of 50 items
   */
  const [universitiesList, setUniversities] = useState(
    memoizedUniversitiesList,
  );

  useEffect(() => {
    if (memoizedUniversitiesList.length === 0) return;
    setList();
  }, [memoizedUniversitiesList]);

  const setList = useCallback(() => {
    const list = memoizedUniversitiesList.slice(
      universitiesList.length,
      universitiesList.length + dataLimit,
    );
    const updatedList = sortedArray([...universitiesList, ...list]);
    setUniversities(updatedList);
  }, [universitiesList, memoizedUniversitiesList]);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.title}>{text.header}</Text>
      </View>

      <FlatList
        data={universitiesList ?? []}
        contentContainerStyle={Style.flex}
        keyExtractor={(item, _) => item?.name}
        renderItem={({item}) => <ListItem item={item} />}
        onEndReached={setList}
        ListEmptyComponent={() => {
          if (isFetching) {
            return <></>;
          }
          return (
            <View style={Style.emptyListContainer}>
              <Text style={Style.noItemText}>{text.unableToFetchData}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={Style.separator} />}
      />
      {isFetching && (
        <View style={Style.messageContainer}>
          <ActivityIndicator
            animating={true}
            color={Color.black}
            size="large"
          />
          <Text>{text.dataFetching}</Text>
        </View>
      )}
      {error && (
        <View style={Style.messageContainer}>
          <Text>{text.somethingWentWrong}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ListOfUniversityScreen;
